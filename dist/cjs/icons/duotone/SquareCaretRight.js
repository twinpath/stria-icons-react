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
var SquareCaretRight_exports = {};
__export(SquareCaretRight_exports, {
  default: () => SquareCaretRight_default
});
module.exports = __toCommonJS(SquareCaretRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareCaretRightDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.652 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.652 419.346 32 384 32ZM312.344 273.594L200.344 377.594C195.812 381.781 189.938 384 184 384C180.75 384 177.5 383.344 174.406 382C165.656 378.188 160 369.531 160 360V152C160 142.469 165.656 133.812 174.406 130C183.156 126.25 193.344 127.938 200.344 134.406L312.344 238.406C317.219 242.969 320 249.312 320 256S317.219 269.031 312.344 273.594Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M312.344 273.594L200.344 377.594C195.812 381.781 189.938 384 184 384C180.75 384 177.5 383.344 174.406 382C165.656 378.188 160 369.531 160 360V152C160 142.469 165.656 133.812 174.406 130C183.156 126.25 193.344 127.938 200.344 134.406L312.344 238.406C317.219 242.969 320 249.312 320 256S317.219 269.031 312.344 273.594Z" })
    ]
  }
));
SquareCaretRightDuotone.displayName = "SquareCaretRightDuotone";
var SquareCaretRight_default = SquareCaretRightDuotone;
