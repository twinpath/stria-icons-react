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
var SquareSlidersVertical_exports = {};
__export(SquareSlidersVertical_exports, {
  default: () => SquareSlidersVertical_default
});
module.exports = __toCommonJS(SquareSlidersVertical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareSlidersVerticalDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM192 224H176V384C176 401.673 161.673 416 144 416H144C126.327 416 112 401.673 112 384V224H96C78.328 224 64 209.674 64 192S78.328 160 96 160H112V128C112 110.327 126.327 96 144 96H144C161.673 96 176 110.327 176 128V160H192C209.674 160 224 174.326 224 192S209.674 224 192 224ZM352 352H336V384C336 401.673 321.673 416 304 416H304C286.327 416 272 401.673 272 384V352H256C238.328 352 224 337.674 224 320S238.328 288 256 288H272V128C272 110.327 286.327 96 304 96H304C321.673 96 336 110.327 336 128V288H352C369.674 288 384 302.326 384 320S369.674 352 352 352Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 160H96C78.328 160 64 174.326 64 192S78.328 224 96 224H192C209.674 224 224 209.674 224 192S209.674 160 192 160ZM352 288H256C238.328 288 224 302.326 224 320S238.328 352 256 352H352C369.674 352 384 337.674 384 320S369.674 288 352 288Z" })
    ]
  }
));
SquareSlidersVerticalDuotone.displayName = "SquareSlidersVerticalDuotone";
var SquareSlidersVertical_default = SquareSlidersVerticalDuotone;
