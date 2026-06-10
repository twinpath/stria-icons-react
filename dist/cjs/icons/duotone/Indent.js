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
var Indent_exports = {};
__export(Indent_exports, {
  default: () => Indent_default
});
module.exports = __toCommonJS(Indent_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IndentDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 96H416C433.674 96 448 81.674 448 64S433.674 32 416 32H32C14.326 32 0 46.326 0 64S14.326 96 32 96ZM416 416H32C14.326 416 0 430.326 0 448S14.326 480 32 480H416C433.674 480 448 465.674 448 448S433.674 416 416 416ZM416 288H224C206.326 288 192 302.326 192 320S206.326 352 224 352H416C433.674 352 448 337.674 448 320S433.674 288 416 288ZM416 160H224C206.326 160 192 174.326 192 192S206.326 224 224 224H416C433.674 224 448 209.674 448 192S433.674 160 416 160Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.219 350.5C11.375 351.5 13.688 352 16 352C19.688 352 23.312 350.75 26.25 348.281L122.25 268.281C125.906 265.25 128 260.75 128 256S125.906 246.75 122.25 243.719L26.25 163.719C21.469 159.719 14.844 158.937 9.219 161.5C3.594 164.156 0 169.781 0 176V336C0 342.219 3.594 347.844 9.219 350.5Z" })
    ]
  }
));
IndentDuotone.displayName = "IndentDuotone";
var Indent_default = IndentDuotone;
