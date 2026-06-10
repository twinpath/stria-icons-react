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
const ListThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M168 104H504C508.406 104 512 100.406 512 96S508.406 88 504 88H168C163.594 88 160 91.594 160 96S163.594 104 168 104ZM504 408H168C163.594 408 160 411.594 160 416S163.594 424 168 424H504C508.406 424 512 420.406 512 416S508.406 408 504 408ZM504 248H168C163.594 248 160 251.594 160 256S163.594 264 168 264H504C508.406 264 512 260.406 512 256S508.406 248 504 248ZM72 48H24C10.746 48 0 58.746 0 72V120C0 133.254 10.746 144 24 144H72C85.254 144 96 133.254 96 120V72C96 58.746 85.254 48 72 48ZM80 120C80 124.41 76.412 128 72 128H24C19.588 128 16 124.41 16 120V72C16 67.59 19.588 64 24 64H72C76.412 64 80 67.59 80 72V120ZM72 368H24C10.746 368 0 378.746 0 392V440C0 453.254 10.746 464 24 464H72C85.254 464 96 453.254 96 440V392C96 378.746 85.254 368 72 368ZM80 440C80 444.41 76.412 448 72 448H24C19.588 448 16 444.41 16 440V392C16 387.59 19.588 384 24 384H72C76.412 384 80 387.59 80 392V440ZM72 208H24C10.746 208 0 218.746 0 232V280C0 293.254 10.746 304 24 304H72C85.254 304 96 293.254 96 280V232C96 218.746 85.254 208 72 208ZM80 280C80 284.41 76.412 288 72 288H24C19.588 288 16 284.41 16 280V232C16 227.59 19.588 224 24 224H72C76.412 224 80 227.59 80 232V280Z" })
  }
));
ListThin.displayName = "ListThin";
var List_default = ListThin;
