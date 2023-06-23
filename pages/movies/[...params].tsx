import { useRouter } from "next/router";
import Seo from "../../component/Seo";

export default function Detail({ params }) {
  // const router = useRouter(); //router를 사용해서 router.query.params 이렇게 얻어오면 CCR로동작함
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  //getServerSideProps으로 매개변수로 컨텍스트(ctx)를 받아서
  //ctx에는 url정보를 얻어올수 있음
  // console.log(params);
  return {
    props: { params },
  };
}
