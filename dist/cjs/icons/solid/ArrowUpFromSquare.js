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
var ArrowUpFromSquare_exports = {};
__export(ArrowUpFromSquare_exports, {
  default: () => ArrowUpFromSquare_default
});
module.exports = __toCommonJS(ArrowUpFromSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpFromSquareSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M135.84 159.725C144.735 159.725 153.466 156.015 159.596 149.332L192 113.938V320C192 337.703 206.328 352.031 224 352.031S256 337.703 256 320V113.938L288.404 149.332C294.725 156.213 303.366 159.708 312.031 159.708C329.676 159.708 344 145.401 344 127.682C344 119.949 341.22 112.191 335.592 106.039L247.594 9.945C241.531 3.314 232.766 -0.001 224 -0.001S206.469 3.314 200.406 9.945L112.408 106.039C106.78 112.191 104 119.949 104 127.682C104 145.37 118.346 159.725 135.84 159.725ZM384 192H304V256H384V448H64V256H144V192H64C28.719 192 0 220.719 0 256V448C0 483.281 28.719 512 64 512H384C419.281 512 448 483.281 448 448V256C448 220.719 419.281 192 384 192Z " })
  }
));
ArrowUpFromSquareSolid.displayName = "ArrowUpFromSquareSolid";
var ArrowUpFromSquare_default = ArrowUpFromSquareSolid;
