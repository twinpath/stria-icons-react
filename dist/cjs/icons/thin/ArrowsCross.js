var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ArrowsCross_exports = {};
__export(ArrowsCross_exports, {
  default: () => ArrowsCross_default
});
module.exports = __toCommonJS(ArrowsCross_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsCrossThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M440.004 32H280.074C275.637 32 272.078 35.586 272.078 39.992C272.078 44.414 275.656 47.992 280.074 47.992H420.699L2.451 466.234C-5.016 473.695 6.266 485.031 13.758 477.543L432.01 59.297V199.922C432.01 204.344 435.588 207.922 440.004 207.922C444.422 207.922 448 204.344 448 199.922V39.992C448 35.578 444.426 32 440.004 32ZM167.443 210.75C170.566 213.871 175.629 213.871 178.752 210.75C181.875 207.625 181.875 202.562 178.752 199.438L13.764 34.449C6.303 26.984 -5.033 38.266 2.457 45.758L167.443 210.75ZM440.006 304.078C435.588 304.078 432.01 307.656 432.01 312.07V452.699L280.555 301.242C277.432 298.121 272.369 298.121 269.246 301.242C266.123 304.367 266.123 309.43 269.246 312.555L420.701 464.008H280.076C275.658 464.008 272.08 467.586 272.08 472.004S275.654 480 280.076 480H440.006C444.422 480 448 476.422 448 472.008V312.07C448 307.633 444.412 304.078 440.006 304.078Z" })
  }
));
ArrowsCrossThin.displayName = "ArrowsCrossThin";
var ArrowsCross_default = ArrowsCrossThin;
