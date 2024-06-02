/**
 *
 * @param {String} props.content 목차 제목
 * @param {Number} props.id 글 제목 id - 링크로 써야됨
 * @returns
 */
function Li(props) {
  const scrollToTarget = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <li className="pt-2">
      <p
        className="flex items-center text-base font-medium text-gray-500 transition-colors hover:text-gray-900 scroll cursor-pointer"
        onClick={() => scrollToTarget(props.id)}
      >
        {props.content}
      </p>
    </li>
  );
}

/**
 *
 * @param {Array} props.list 목차 목록
 * @returns
 */
export default function Toc(props) {
  const linkList = [];
  for (let i = 0; i < props.list.length; i++) {
    linkList.push(<Li content={props.list[i]} id={i} key={i}/>);
  }
  return (
    <nav className="fixed hidden pl-8 pr-12 py-8 h-full space-y-1 overflow-y-auto md:block border-r w-[230px]">
      <h6 className="text-base font-semibold tracking-wide uppercase text-gray-500">
        목차
      </h6>
      <ul className="space-y-1">{linkList}</ul>
    </nav>
  );
}
