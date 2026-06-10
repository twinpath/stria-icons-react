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
var MusicNoteSlash_exports = {};
__export(MusicNoteSlash_exports, {
  default: () => MusicNoteSlash_default
});
module.exports = __toCommonJS(MusicNoteSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MusicNoteSlashDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M467.124 6.325C459.124 0.323 448.624 -1.552 438.999 1.323L342.374 29.826C329.124 33.951 319.999 46.328 319.999 60.328V225.497L383.999 275.658V148.086L456.999 126.709C470.624 122.71 479.999 110.208 479.999 95.956V31.951C479.999 21.824 475.249 12.325 467.124 6.325ZM272 351.995C210.144 351.995 160 387.811 160 431.993S210.144 511.992 272 511.992S383.999 476.176 383.999 431.993S333.855 351.995 272 351.995Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M630.811 469.102L38.814 5.11C34.407 1.672 29.189 0.001 24.032 0.001C16.907 0.001 9.845 3.157 5.126 9.188C-3.061 19.625 -1.249 34.719 9.189 42.891L601.186 506.883C611.686 515.086 626.749 513.211 634.874 502.805C643.061 492.367 641.249 477.274 630.811 469.102Z" })
    ]
  }
));
MusicNoteSlashDuotone.displayName = "MusicNoteSlashDuotone";
var MusicNoteSlash_default = MusicNoteSlashDuotone;
