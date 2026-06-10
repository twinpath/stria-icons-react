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
var Newspaper_exports = {};
__export(Newspaper_exports, {
  default: () => Newspaper_default
});
module.exports = __toCommonJS(Newspaper_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const NewspaperDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 32H128C110.326 32 96 46.326 96 64V432C96 458.51 74.51 480 48 480H448C483.346 480 512 451.346 512 416V64C512 46.326 497.674 32 480 32ZM288 408C288 412.418 284.418 416 280 416H168C163.582 416 160 412.418 160 408V392C160 387.58 163.582 384 168 384H280C284.418 384 288 387.58 288 392V408ZM288 312C288 316.418 284.418 320 280 320H168C163.582 320 160 316.418 160 312V296C160 291.58 163.582 288 168 288H280C284.418 288 288 291.58 288 296V312ZM448 408C448 412.418 444.418 416 440 416H328C323.582 416 320 412.418 320 408V392C320 387.58 323.582 384 328 384H440C444.418 384 448 387.58 448 392V408ZM448 312C448 316.418 444.418 320 440 320H328C323.582 320 320 316.418 320 312V296C320 291.58 323.582 288 328 288H440C444.418 288 448 291.58 448 296V312ZM448 208C448 216.836 440.836 224 432 224H176C167.164 224 160 216.836 160 208V112C160 103.162 167.164 96 176 96H432C440.836 96 448 103.162 448 112V208Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M280 384H168C163.582 384 160 387.58 160 392V408C160 412.418 163.582 416 168 416H280C284.418 416 288 412.418 288 408V392C288 387.58 284.418 384 280 384ZM280 288H168C163.582 288 160 291.58 160 296V312C160 316.418 163.582 320 168 320H280C284.418 320 288 316.418 288 312V296C288 291.58 284.418 288 280 288ZM440 384H328C323.582 384 320 387.58 320 392V408C320 412.418 323.582 416 328 416H440C444.418 416 448 412.418 448 408V392C448 387.58 444.418 384 440 384ZM440 288H328C323.582 288 320 291.58 320 296V312C320 316.418 323.582 320 328 320H440C444.418 320 448 316.418 448 312V296C448 291.58 444.418 288 440 288ZM0 128V432C0 458.51 21.49 480 48 480S96 458.51 96 432V96H32C14.326 96 0 110.326 0 128Z" })
    ]
  }
));
NewspaperDuotone.displayName = "NewspaperDuotone";
var Newspaper_default = NewspaperDuotone;
