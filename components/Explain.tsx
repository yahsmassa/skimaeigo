import Swal from "sweetalert2";
import { QandA } from "@/lib/types";

type ExplainProps = {
  qa: QandA[];
  questionId: string;
};

export const Explain = ({ qa, questionId }: ExplainProps) => {
  return (
    <button
      onClick={() => {
        const explanation = qa.find(
          (q) => q.questionId === questionId
        )?.explanation;
        if (explanation) {
          Swal.fire({
            title: "解説",
            html: explanation.join("<br><br>"),
            confirmButtonText: "閉じる",
          });
        }
      }}
      className="px-2 py-1 text-sm   bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      解説
    </button>
  );
};
