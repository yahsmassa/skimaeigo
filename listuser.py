import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth

# Firebaseの初期化
cred = credentials.Certificate('./serviceAccountKey.json')
firebase_admin.initialize_app(cred)

async def get_user_list():
    try:
        # デフォルトで1000件まで取得します
        users_list = []
        page = auth.list_users()

        for user in page.users:
            # ユーザー情報を辞書形式で格納
            user_data = {
                'uid': user.uid,
                'email': user.email,
                'display_name': user.display_name,
                'disabled': user.disabled,
                'custom_claims': user.custom_claims or {},  # カスタムクレーム情報
                'created_at': user.user_metadata.creation_timestamp,
                'last_sign_in': user.user_metadata.last_sign_in_timestamp
            }
            users_list.append(user_data)

        return {
            'success': True,
            'users': users_list
        }

    except Exception as e:
        return {
            'success': False,
            'error': str(e)
        }

async def set_premium_email(email: str, flag: bool):
    try:
        # メールアドレスからユーザーを検索
        user = auth.get_user_by_email(email)
        # カスタムクレームを設定
        auth.set_custom_user_claims(user.uid, {'premium': flag})
        return {
            'success': True,
            'message': f'ユーザー {email} のプレミアムステータスを {flag} に設定しました'
        }
    except Exception as e:
        return {
            'success': False,
            'error': str(e)
        }

async def set_premium_uid(uid: str, flag: bool):
    try:
        # UIDの存在確認
        auth.get_user(uid)
        # カスタムクレームを設定
        auth.set_custom_user_claims(uid, {'premium': flag})
        return {
            'success': True,
            'message': f'ユーザー {uid} のプレミアムステータスを {flag} に設定しました'
        }
    except Exception as e:
        return {
            'success': False,
            'error': str(e)
        }

async def print_all_user():
    from datetime import datetime

    result = await get_user_list()

    if result['success']:
        print("\n=== ユーザー一覧 ===")
        for user in result['users']:
            # タイムスタンプを日時形式に変換
            created_at = datetime.fromtimestamp(user['created_at'] / 1000).strftime('%Y/%m/%d %H:%M')
            last_sign_in = '未ログイン'
            if user['last_sign_in']:
                last_sign_in = datetime.fromtimestamp(user['last_sign_in'] / 1000).strftime('%Y/%m/%d %H:%M')

            print("\n------------------------")
            print(f"📧 メール: {user['email']}")
            print(f"🆔 UID: {user['uid']}")
            print(f"👤 表示名: {user['display_name']}")
            print(f"🔑 カスタムクレーム: {user['custom_claims']}")
            print(f"📅 作成日時: {created_at}")
            print(f"🕒 最終ログイン: {last_sign_in}")
            print(f"🚫 無効状態: {user['disabled']}")
    else:
        print(f"❌ エラーが発生しました: {result['error']}")

async def set_premium():
    # プレミアム設定のテスト
    email_result = await set_premium_email("rxxyw5xdbv@privaterelay.appleid.com", True)
    print("\nメールでの設定結果:", email_result)

    # uid_result = await set_premium_uid("あるユーザーのUID", False)
    # print("\nUIDでの設定結果:", uid_result)

if __name__ == "__main__":
    import asyncio
    asyncio.run(set_premium())
    asyncio.run(print_all_user())

    # テスト用のコード追加
