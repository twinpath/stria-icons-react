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
var Icons_exports = {};
__export(Icons_exports, {
  default: () => Icons_default
});
module.exports = __toCommonJS(Icons_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IconsSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M260.625 319.854H212.625L205.5 305.604C201.5 294.852 191.25 287.852 179.875 287.852H108.125C96.75 287.852 86.5 294.852 82.5 305.604L75.5 319.854H27.5C12.25 319.854 0 332.106 0 347.231V484.492C0 499.744 12.25 511.994 27.375 511.994H260.625C275.75 511.994 288 499.744 288 484.492V347.231C288 332.106 275.75 319.854 260.625 319.854ZM144 467.99C115.25 467.99 92 444.738 92 415.986S115.25 363.983 144 363.983S196 387.234 196 415.986S172.75 467.99 144 467.99ZM116.625 219.346C119.625 222.471 123.75 224.096 128 224.096S136.375 222.471 139.25 219.346L236 119.463C264.25 90.461 262.5 42.332 231.125 15.58C203.75 -7.797 163 -3.547 137.875 22.455L128 32.58L118.125 22.455C93 -3.547 52.25 -7.797 24.875 15.58C-6.5 42.332 -8.125 90.461 19.875 119.463L116.625 219.346ZM478.125 0.328L329.5 23.08C314.875 25.33 304 38.832 304 54.832V161.592C298.75 160.467 293.375 159.967 288 159.842C252.625 159.842 224 181.344 224 207.846S252.625 255.85 288 255.85C323.25 255.85 351.75 234.598 352 208.221V99.586L464 82.459V129.588C458.75 128.463 453.375 127.963 448 127.838C412.625 127.838 384 149.34 384 175.842C384 202.469 412.625 223.846 448 223.846C483.25 223.846 511.75 202.594 512 176.217V31.955C512 12.455 496 -2.422 478.125 0.328ZM496 368H440.275L478.719 278.297C481.656 271.438 479.438 263.453 473.406 259.063C467.313 254.641 459.063 255.031 453.469 259.953L325.469 371.953C320.438 376.344 318.688 383.391 321.031 389.625C323.375 395.875 329.344 400 336 400H391.725L353.281 489.703C350.344 496.563 352.562 504.547 358.594 508.938C361.406 510.984 364.719 512 368 512C371.781 512 375.531 510.672 378.531 508.047L506.531 396.047C511.562 391.656 513.312 384.609 510.969 378.375C508.625 372.125 502.656 368 496 368Z" })
  }
));
IconsSolid.displayName = "IconsSolid";
var Icons_default = IconsSolid;
