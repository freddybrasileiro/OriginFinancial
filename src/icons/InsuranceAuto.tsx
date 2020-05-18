import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.406 17.035c1.848 1.967-1.04 4.859-2.888 2.892L19.5 5.003c-2.614 2.618-5.11 5.09-7.594 7.547-2.455 2.43-4.897 4.846-7.424 7.377-1.848 1.967-4.736-.925-2.888-2.892l2.542-2.43v-8.56h6.007v2.43L17.998.606c.809-.81 2.195-.81 3.004 0l16.404 16.428zM21.529 36.471a10.123 10.123 0 01-.873-4.122c.002-5.522 4.403-9.997 9.83-9.996 1.216 0 2.38.225 3.454.636V21.43a1.337 1.337 0 00-.13-.108c-.115-.088-.251-.193-.332-.355L19.5 7.086 5.522 20.968c-.08.162-.217.267-.332.355-.05.038-.095.073-.13.108v15.04h5.078V25.793c0-1.127.577-1.932 1.27-1.932h4.621c.693 0 1.27.805 1.27 1.931v10.679h4.23zM30.484 40C34.634 40 38 36.577 38 32.354c0-4.223-3.363-7.647-7.514-7.648-4.15-.001-7.516 3.421-7.517 7.644.003 4.223 3.365 7.645 7.515 7.65zm-.625-11.548v-.576c0-.218.115-.419.3-.528a.59.59 0 01.6 0c.185.11.3.31.3.528v.486a5.15 5.15 0 011.13.165.722.722 0 01.516.789.714.714 0 01-.697.629.676.676 0 01-.195-.029 3.698 3.698 0 00-1.083-.158c-.794 0-1.052.348-1.052.696 0 .412.43.673 1.468 1.07 1.456.524 2.044 1.209 2.044 2.33 0 1.123-.772 2.055-2.18 2.302v.68c0 .336-.268.61-.6.61a.605.605 0 01-.599-.61v-.576a5.57 5.57 0 01-1.47-.288.724.724 0 01-.47-.863l.015-.06a.694.694 0 01.908-.475c.425.15.872.228 1.323.23.698 0 1.176-.288 1.176-.77 0-.484-.393-.772-1.298-1.085-1.309-.45-2.203-1.07-2.203-2.28 0-1.095.758-1.956 2.067-2.217z"
        fill="#657786"
      />
    </svg>
  );
}

export default SvgComponent;