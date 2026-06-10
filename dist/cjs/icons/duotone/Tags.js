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
var Tags_exports = {};
__export(Tags_exports, {
  default: () => Tags_default
});
module.exports = __toCommonJS(Tags_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TagsDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M559.715 225.604L382.52 48.403C373.498 39.381 355.68 32.001 342.922 32.001H306L516.57 242.577C529.066 255.075 529.066 275.337 516.568 287.833L332.539 471.85C354.061 484.799 382.342 482.161 400.904 463.6L559.713 304.801C581.584 282.932 581.586 247.473 559.715 225.604Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M431.598 225.604L254.402 48.403C245.381 39.381 227.562 32.001 214.805 32.001H28C12.535 32.001 0 44.536 0 60.001V246.803C0 259.561 7.381 277.381 16.402 286.403L193.592 463.598C215.461 485.467 250.916 485.467 272.787 463.6L431.596 304.801C453.467 282.932 453.469 247.473 431.598 225.604ZM112 176.001C94.334 176.001 80 161.676 80 144.001C80 126.323 94.334 112.001 112 112.001S144 126.323 144 144.001C144 161.676 129.666 176.001 112 176.001Z" })
    ]
  }
));
TagsDuotone.displayName = "TagsDuotone";
var Tags_default = TagsDuotone;
