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
var ArrowLeftRotate_exports = {};
__export(ArrowLeftRotate_exports, {
  default: () => ArrowLeftRotate_default
});
module.exports = __toCommonJS(ArrowLeftRotate_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowLeftRotateThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256.316 24C160.884 24 75.312 84.141 40.894 171.859L20.847 71.688C19.972 67.344 15.597 64.625 11.441 65.406C7.097 66.281 4.285 70.5 5.16 74.812L30.269 200.312C31.035 204.125 34.363 206.75 38.097 206.75C38.628 206.75 39.16 206.688 39.675 206.594L165.191 181.5C169.535 180.625 172.331 176.406 171.472 172.094C170.597 167.75 166.16 165 162.066 165.812L51.771 187.867C80.888 100.586 163.765 40 256.316 40C375.425 40 472.316 136.906 472.316 256S375.425 472 256.316 472C211.878 472 169.191 458.625 132.878 433.281C129.316 430.781 124.285 431.594 121.738 435.281C119.206 438.906 120.097 443.875 123.722 446.406C162.738 473.625 208.597 488 256.316 488C384.238 488 488.316 383.938 488.316 256S384.238 24 256.316 24Z" })
  }
));
ArrowLeftRotateThin.displayName = "ArrowLeftRotateThin";
var ArrowLeftRotate_default = ArrowLeftRotateThin;
