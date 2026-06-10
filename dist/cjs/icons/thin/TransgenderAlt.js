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
var TransgenderAlt_exports = {};
__export(TransgenderAlt_exports, {
  default: () => TransgenderAlt_default
});
module.exports = __toCommonJS(TransgenderAlt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TransgenderAltThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504 0H384C379.578 0 376 3.574 376 7.99C376 12.408 379.578 15.982 384 15.982H484.688L371.195 129.357C342.08 99.049 301.346 80 256 80C210.619 80 169.861 99.084 140.742 129.434L107.311 96.002L133.656 69.656C136.781 66.531 136.781 61.469 133.656 58.344S125.469 55.219 122.344 58.344L95.998 84.689L27.312 16.002H128C132.422 16.002 136 12.424 136 8.002S132.422 0.002 128 0.002H8C3.578 0.002 0 3.58 0 8.002V128.002C0 132.424 3.578 136.002 8 136.002S16 132.424 16 128.002V27.314L84.686 96.002L58.344 122.344C55.219 125.469 55.219 130.531 58.344 133.656C59.906 135.219 61.953 136 64 136S68.094 135.219 69.656 133.656L95.998 107.314L130.514 141.83C109.219 169.004 96 202.799 96 240C96 325.625 163.434 394.939 248 399.193V440H192C187.578 440 184 443.578 184 448S187.578 456 192 456H248V504C248 508.422 251.578 512 256 512S264 508.422 264 504V456H320C324.422 456 328 452.422 328 448S324.422 440 320 440H264V399.193C348.566 394.939 416 325.625 416 240C416 202.76 402.754 168.936 381.418 141.748L496 27.283V127.865C496 132.283 499.578 135.857 504 135.857S512 132.283 512 127.865V7.99C512 3.574 508.422 0 504 0ZM256 384C176.598 384 112 319.402 112 240S176.598 96 256 96S400 160.598 400 240S335.402 384 256 384Z" })
  }
));
TransgenderAltThin.displayName = "TransgenderAltThin";
var TransgenderAlt_default = TransgenderAltThin;
