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
var DongSign_exports = {};
__export(DongSign_exports, {
  default: () => DongSign_default
});
module.exports = __toCommonJS(DongSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DongSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M376 464H8C3.578 464 0 467.594 0 472S3.578 480 8 480H376C380.422 480 384 476.406 384 472S380.422 464 376 464ZM184 416C228.734 416 267.365 391.104 288 354.721V408C288 412.406 291.578 416 296 416S304 412.406 304 408V96H344C348.422 96 352 92.406 352 88S348.422 80 344 80H304V40C304 35.594 300.422 32 296 32S288 35.594 288 40V80H200C195.578 80 192 83.594 192 88S195.578 96 200 96H288V237.279C267.365 200.896 228.734 176 184 176C117.828 176 64 229.844 64 296S117.828 416 184 416ZM184 192C241.344 192 288 238.656 288 296S241.344 400 184 400S80 353.344 80 296S126.656 192 184 192Z" })
  }
));
DongSignThin.displayName = "DongSignThin";
var DongSign_default = DongSignThin;
