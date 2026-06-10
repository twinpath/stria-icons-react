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
var ListMusic_exports = {};
__export(ListMusic_exports, {
  default: () => ListMusic_default
});
module.exports = __toCommonJS(ListMusic_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ListMusicThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 232H280C284.406 232 288 228.406 288 224S284.406 216 280 216H8C3.594 216 0 219.594 0 224S3.594 232 8 232ZM8 104H280C284.406 104 288 100.406 288 96S284.406 88 280 88H8C3.594 88 0 91.594 0 96S3.594 104 8 104ZM152 344H8C3.594 344 0 347.594 0 352S3.594 360 8 360H152C156.406 360 160 356.406 160 352S156.406 344 152 344ZM481.242 0.984L396.594 25.812C379.68 30.891 368.094 46.461 368.094 64.117V388.023C350.922 366.344 321.5 352 288 352C234.98 352 192 387.816 192 432C192 476.18 234.98 512 288 512S384 476.18 384 432H384.094V162.758L494.766 130.227C504.984 127.227 512 117.852 512 107.203V24.012C512 7.996 496.613 -3.523 481.242 0.984ZM288 496C243.887 496 208 467.289 208 432S243.887 368 288 368S368 396.711 368 432S332.113 496 288 496ZM496 107.191C496 110.742 493.66 113.867 490.258 114.867L384.094 146.062V64.148C384.094 53.484 391.125 44.094 401.359 41.094L485.75 16.336C490.871 14.832 496 18.672 496 24.012V107.191Z" })
  }
));
ListMusicThin.displayName = "ListMusicThin";
var ListMusic_default = ListMusicThin;
