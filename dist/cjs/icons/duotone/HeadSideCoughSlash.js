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
var HeadSideCoughSlash_exports = {};
__export(HeadSideCoughSlash_exports, {
  default: () => HeadSideCoughSlash_default
});
module.exports = __toCommonJS(HeadSideCoughSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadSideCoughSlashDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M616 304C629.25 304 640 293.25 640 280S629.25 256 616 256S592 266.75 592 280S602.75 304 616 304ZM404.096 88.25C365.596 33.625 302.471 0 234.096 0H192C149.836 0 110.963 13.768 79.281 36.828L440.57 320H447.971C471.096 320 486.596 296.125 477.221 275C456.221 227.875 428.721 123.25 404.096 88.25ZM320 416C302.326 416 288 401.674 288 384S302.326 352 320 352H325.758L18.164 110.912C6.631 135.576 0 162.986 0 192C0 248.75 24.75 299.625 64 334.875V512H287.971V480H351.971C385.217 480 412.182 454.623 415.346 422.217L407.414 416H320ZM552 304C538.75 304 528 314.75 528 328S538.75 352 552 352S576 341.25 576 328S565.25 304 552 304ZM616 360C602.75 360 592 370.75 592 384S602.75 408 616 408S640 397.25 640 384S629.25 360 616 360Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.187C-3.061 19.625 -1.249 34.718 9.189 42.89L601.186 506.883C611.686 515.086 626.749 513.211 634.874 502.805C643.061 492.367 641.249 477.274 630.811 469.102L38.814 5.109Z" })
    ]
  }
));
HeadSideCoughSlashDuotone.displayName = "HeadSideCoughSlashDuotone";
var HeadSideCoughSlash_default = HeadSideCoughSlashDuotone;
