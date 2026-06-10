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
var UpRightFromSquare_exports = {};
__export(UpRightFromSquare_exports, {
  default: () => UpRightFromSquare_default
});
module.exports = __toCommonJS(UpRightFromSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UpRightFromSquareThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M440 279.031C435.594 279.031 432 282.609 432 287.031V440C432 470.875 406.875 496 376 496H72C41.125 496 16 470.875 16 440V136C16 105.125 41.125 80 72 80H224.25C228.656 80 232.25 76.422 232.25 72S228.656 64 224.25 64H72C32.312 64 0 96.297 0 136V440C0 479.703 32.312 512 72 512H376C415.688 512 448 479.703 448 440V287.031C448 282.609 444.406 279.031 440 279.031ZM488 0H345.781C322.859 0 311.383 27.711 327.59 43.918L392.18 108.508L162.344 338.344C159.219 341.469 159.219 346.531 162.344 349.656C163.906 351.219 165.938 352 168 352S172.094 351.219 173.656 349.656L403.492 119.82L468.086 184.414C473.324 189.652 479.77 192 486.09 192C499.312 192 512 181.73 512 166.223V24C512 10.746 501.254 0 488 0ZM496 166.223C496 172.967 490.203 176 486.09 176C483.574 176 481.324 175.025 479.398 173.102L338.902 32.604C334.754 28.455 336.047 23.809 336.793 22.004C337.543 20.199 339.914 16 345.781 16H488C492.41 16 496 19.59 496 24V166.223Z" })
  }
));
UpRightFromSquareThin.displayName = "UpRightFromSquareThin";
var UpRightFromSquare_default = UpRightFromSquareThin;
