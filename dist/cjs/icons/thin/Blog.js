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
var Blog_exports = {};
__export(Blog_exports, {
  default: () => Blog_default
});
module.exports = __toCommonJS(Blog_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BlogThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M200 32C195.578 32 192 35.578 192 40S195.578 48 200 48C345.562 48 464 166.438 464 312C464 316.422 467.578 320 472 320S480 316.422 480 312C480 157.609 354.391 32 200 32ZM200 128C195.578 128 192 131.578 192 136S195.578 144 200 144C292.641 144 368 219.359 368 312C368 316.422 371.578 320 376 320S384 316.422 384 312C384 210.547 301.453 128 200 128ZM160 224C155.578 224 152 227.578 152 232S155.578 240 160 240C221.75 240 272 290.25 272 352S221.75 464 160 464S48 413.75 48 352V104C48 99.578 44.422 96 40 96S32 99.578 32 104V352C32 422.578 89.422 480 160 480S288 422.578 288 352S230.578 224 160 224Z" })
  }
));
BlogThin.displayName = "BlogThin";
var Blog_default = BlogThin;
