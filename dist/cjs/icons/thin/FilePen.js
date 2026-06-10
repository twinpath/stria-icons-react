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
var FilePen_exports = {};
__export(FilePen_exports, {
  default: () => FilePen_default
});
module.exports = __toCommonJS(FilePen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilePenThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M374.629 150.625L233.371 9.375C227.371 3.371 219.23 0 210.746 0H64C28.652 0 0 28.652 0 64V448C0 483.344 28.652 512 64 512H320C355.348 512 384 483.344 384 448V173.254C384 164.766 380.629 156.629 374.629 150.625ZM224 22.629L361.375 160H248C234.781 160 224 149.234 224 136V22.629ZM368 448C368 474.469 346.469 496 320 496H64C37.531 496 16 474.469 16 448V64C16 37.531 37.531 16 64 16H208V136C208 158.062 225.938 176 248 176H368V448ZM93.85 376.984C93.188 378.227 92.564 379.391 91.898 380.633L80.135 439.461C79.17 444.289 82.998 448 87.178 448C87.633 448 88.092 447.953 88.549 447.863L147.367 436.102C148.611 435.434 149.775 434.812 151.023 434.145L294.445 290.742C307.201 277.984 307.207 257.305 294.449 244.547L283.477 233.57C277.096 227.188 268.734 224 260.371 224C252.014 224 243.656 227.188 237.275 233.566L93.85 376.984ZM141.438 420.633L98.854 429.148L107.367 386.57L212.357 281.578L246.432 315.656L141.438 420.633ZM260.371 240.332C264.734 240.332 268.842 242.031 271.924 245.117L282.902 256.094C285.984 259.18 287.684 263.281 287.684 267.645S285.98 276.109 282.898 279.191L257.979 304.109L223.904 270.031L248.824 245.113C251.91 242.031 256.01 240.332 260.371 240.332Z" })
  }
));
FilePenThin.displayName = "FilePenThin";
var FilePen_default = FilePenThin;
