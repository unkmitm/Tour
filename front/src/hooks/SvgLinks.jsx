const SvgLinks = ({
  address,
  target = "_blank",
  rel = "noopener noreferrer",
  classLink = "",
  classLink2 = "",
  fill = "currentColor",
  viewBox = "0 0 24 24",
  path,
}) => {
  return (
    <a href={address} target={target} rel={rel} className={classLink}>
      <svg className={classLink2} fill={fill} viewBox={viewBox}>
        <path d={path} />
      </svg>
    </a>
  );
};

export default SvgLinks;
