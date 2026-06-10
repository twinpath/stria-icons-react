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
var Vihara_exports = {};
__export(Vihara_exports, {
  default: () => Vihara_default
});
module.exports = __toCommonJS(Vihara_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ViharaDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 496C64 504.836 71.164 512 80 512H112C120.836 512 128 504.836 128 496V448H64V496ZM479.998 496C479.998 504.836 487.162 512 495.998 512H527.998C536.834 512 543.998 504.836 543.998 496V448H479.998V496ZM287.999 496C287.999 504.836 295.163 512 303.999 512H335.999C344.835 512 351.999 504.836 351.999 496V448H287.999V496ZM96 352H160V288H96V352ZM160 192H223.999V128H160V192ZM479.998 128H415.998V192H479.998V128ZM287.999 352H351.999V288H287.999V352ZM479.998 288V352H543.998V288H479.998Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M40.885 270.25L96.008 288H543.99L599.115 270.25C610.99 264.375 610.99 247.625 599.115 241.75L479.992 192H160.006L40.885 241.75C29.01 247.625 29.01 264.375 40.885 270.25ZM160.006 128H479.992L507.242 111.75C514.992 104 512.867 91 503.117 86.125L319.999 0L136.881 86.125C127.131 91 125.006 104 132.756 111.75L160.006 128ZM632.865 400.75L543.99 352H96.008L7.135 400.75C1.76 404.375 -0.615 410.375 0.135 416C0.76 421 3.76 425.75 8.885 428.375L64.008 448H575.99L631.115 428.375C636.24 425.75 639.24 421 639.865 416C640.615 410.375 638.24 404.375 632.865 400.75Z" })
    ]
  }
));
ViharaDuotone.displayName = "ViharaDuotone";
var Vihara_default = ViharaDuotone;
