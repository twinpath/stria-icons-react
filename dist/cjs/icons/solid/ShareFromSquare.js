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
var ShareFromSquare_exports = {};
__export(ShareFromSquare_exports, {
  default: () => ShareFromSquare_default
});
module.exports = __toCommonJS(ShareFromSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShareFromSquareSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M568.879 143.492L418.018 5.313C404.812 -6.773 384 3.039 384 21.836V96C241.223 97.629 128 126.078 128 260.637C128 314.941 163.195 368.75 202.084 396.867C214.223 405.648 231.5 394.629 227.027 380.406C186.723 252.227 256 224 384 223.969V298.172C384 316.992 404.84 326.766 418.018 314.68L568.879 176.5C578.361 167.809 578.387 152.184 568.879 143.492ZM416 384C398.326 384 384 398.328 384 416V447.996H64V128H96C113.674 128 128 113.676 128 96S113.674 64 96 64H64C28.654 64 0 92.652 0 128V447.996C0 483.34 28.654 511.996 64 511.996H384C419.346 511.996 448 483.34 448 447.996V416C448 398.328 433.674 384 416 384Z" })
  }
));
ShareFromSquareSolid.displayName = "ShareFromSquareSolid";
var ShareFromSquare_default = ShareFromSquareSolid;
