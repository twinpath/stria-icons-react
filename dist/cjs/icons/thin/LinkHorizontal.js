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
var LinkHorizontal_exports = {};
__export(LinkHorizontal_exports, {
  default: () => LinkHorizontal_default
});
module.exports = __toCommonJS(LinkHorizontal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LinkHorizontalThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 320C66.25 320 16 269.75 16 208S66.25 96 128 96H320C381.75 96 432 146.25 432 208S381.75 320 320 320H272C267.594 320 264 323.578 264 328S267.594 336 272 336H320C390.594 336 448 278.578 448 208S390.594 80 320 80H128C57.406 80 0 137.422 0 208S57.406 336 128 336C132.406 336 136 332.422 136 328S132.406 320 128 320ZM512 176C507.594 176 504 179.578 504 184S507.594 192 512 192C573.75 192 624 242.25 624 304S573.75 416 512 416H320C258.25 416 208 365.75 208 304S258.25 192 320 192H368C372.406 192 376 188.422 376 184S372.406 176 368 176H320C249.406 176 192 233.422 192 304S249.406 432 320 432H512C582.594 432 640 374.578 640 304S582.594 176 512 176Z" })
  }
));
LinkHorizontalThin.displayName = "LinkHorizontalThin";
var LinkHorizontal_default = LinkHorizontalThin;
