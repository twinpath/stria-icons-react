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
var ArrowUpRightAndArrowDownLeftFromCenter_exports = {};
__export(ArrowUpRightAndArrowDownLeftFromCenter_exports, {
  default: () => ArrowUpRightAndArrowDownLeftFromCenter_default
});
module.exports = __toCommonJS(ArrowUpRightAndArrowDownLeftFromCenter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpRightAndArrowDownLeftFromCenterThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M210.253 290.441L15.991 484.702V344.076C15.991 339.658 12.413 336.079 7.996 336.079C3.579 336.079 0 339.652 0 344.076V504.006C0 508.42 3.575 512 7.996 512H167.926C172.364 512 175.923 508.41 175.923 504.006C175.923 499.588 172.344 496.009 167.926 496.009H27.301L221.561 301.751C229.044 294.266 217.731 282.962 210.253 290.441ZM504.004 0H344.074C339.636 0 336.077 3.588 336.077 7.994C336.077 12.412 339.656 15.991 344.074 15.991H484.699L290.439 210.251C282.974 217.713 294.254 229.049 301.747 221.559L496.009 27.298V167.924C496.009 172.342 499.587 175.921 504.004 175.921C508.422 175.921 512 172.346 512 167.924V7.994C512 3.578 508.425 0 504.004 0Z" })
  }
));
ArrowUpRightAndArrowDownLeftFromCenterThin.displayName = "ArrowUpRightAndArrowDownLeftFromCenterThin";
var ArrowUpRightAndArrowDownLeftFromCenter_default = ArrowUpRightAndArrowDownLeftFromCenterThin;
