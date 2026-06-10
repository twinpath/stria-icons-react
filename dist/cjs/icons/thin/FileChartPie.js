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
var FileChartPie_exports = {};
__export(FileChartPie_exports, {
  default: () => FileChartPie_default
});
module.exports = __toCommonJS(FileChartPie_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileChartPieThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M374.629 150.625L233.371 9.375C227.371 3.371 219.23 0 210.746 0H64C28.652 0 0 28.652 0 64V448C0 483.344 28.652 512 64 512H320C355.348 512 384 483.344 384 448V173.254C384 164.766 380.629 156.629 374.629 150.625ZM224 22.629L361.375 160H248C234.781 160 224 149.234 224 136V22.629ZM368 448C368 474.469 346.469 496 320 496H64C37.531 496 16 474.469 16 448V64C16 37.531 37.531 16 64 16H208V136C208 158.062 225.938 176 248 176H368V448ZM274.281 354.156C269.969 352.812 265.594 355.312 264.328 359.531C252.875 398.094 218.281 424 178.25 424C128.484 424 88 383.5 88 333.75C88 293.75 113.906 259.156 152.453 247.656C156.688 246.406 159.094 241.938 157.844 237.719C156.578 233.5 152.172 230.906 147.891 232.344C102.5 245.844 72 286.594 72 333.75C72 392.344 119.656 440 178.25 440C225.422 440 266.188 409.5 279.672 364.094C280.922 359.844 278.516 355.406 274.281 354.156ZM199.062 208.719C195.031 209.188 192 212.594 192 216.656V312C192 316.406 195.578 320 200 320H295.359C299.359 320 302.984 315.156 303.531 311.188C303.781 309.344 304 307.5 304 305.594C304 251.781 260.219 208 206.406 208C204.438 208 202.547 208.25 199.062 208.719ZM208 224C251.734 224.844 287.141 260.281 287.984 304H208V224Z" })
  }
));
FileChartPieThin.displayName = "FileChartPieThin";
var FileChartPie_default = FileChartPieThin;
