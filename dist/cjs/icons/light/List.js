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
var List_exports = {};
__export(List_exports, {
  default: () => List_default
});
module.exports = __toCommonJS(List_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ListLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 48H32C14.328 48 0 62.326 0 80V112C0 129.672 14.328 144 32 144H64C81.674 144 96 129.672 96 112V80C96 62.326 81.674 48 64 48ZM64 112H32V80H64V112ZM64 368H32C14.328 368 0 382.326 0 400V432C0 449.672 14.328 464 32 464H64C81.674 464 96 449.672 96 432V400C96 382.326 81.674 368 64 368ZM64 432H32V400H64V432ZM176 112H496C504.801 112 512 104.799 512 96C512 87.199 504.801 80 496 80H176C167.201 80 160 87.199 160 96C160 104.799 167.201 112 176 112ZM496 240H176C167.201 240 160 247.199 160 256C160 264.799 167.201 272 176 272H496C504.801 272 512 264.799 512 256C512 247.199 504.801 240 496 240ZM496 400H176C167.201 400 160 407.199 160 416C160 424.799 167.201 432 176 432H496C504.801 432 512 424.799 512 416C512 407.199 504.801 400 496 400ZM64 208H32C14.328 208 0 222.326 0 240V272C0 289.672 14.328 304 32 304H64C81.674 304 96 289.672 96 272V240C96 222.326 81.674 208 64 208ZM64 272H32V240H64V272Z" })
  }
));
ListLight.displayName = "ListLight";
var List_default = ListLight;
