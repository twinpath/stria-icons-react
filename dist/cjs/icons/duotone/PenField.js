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
var PenField_exports = {};
__export(PenField_exports, {
  default: () => PenField_default
});
module.exports = __toCommonJS(PenField_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenFieldDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 326.578C512 326.596 511.99 326.609 511.99 326.627V448H63.998V192H292.115L356.111 128H63.998C28.654 128 0 156.652 0 192V448C0 483.346 28.654 512 63.998 512H511.99C547.334 512 575.988 483.346 575.988 448V384H576V219.889L512 283.883V326.578Z ", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 288C110.326 288 96 302.326 96 320S110.326 352 128 352S160 337.674 160 320S145.674 288 128 288ZM640 69.787C640 58.527 635.704 47.267 627.113 38.676L601.324 12.887C592.732 4.295 581.472 -0.001 570.212 -0.001S547.691 4.295 539.1 12.887L311.691 240.305C308.619 243.377 306.527 247.289 305.676 251.547L288.219 338.834C288.07 339.577 287.999 340.312 287.999 341.032C287.999 347.044 292.953 351.997 298.964 351.997C299.684 351.997 300.419 351.926 301.162 351.777L388.453 334.318C392.711 333.467 396.621 331.373 399.691 328.303L627.109 100.904C635.703 92.312 640 81.049 640 69.787ZM224 288C206.326 288 192 302.326 192 320S206.326 352 224 352S256 337.674 256 320S241.674 288 224 288Z " })
    ]
  }
));
PenFieldDuotone.displayName = "PenFieldDuotone";
var PenField_default = PenFieldDuotone;
