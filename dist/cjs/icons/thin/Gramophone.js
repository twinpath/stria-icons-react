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
var Gramophone_exports = {};
__export(Gramophone_exports, {
  default: () => Gramophone_default
});
module.exports = __toCommonJS(Gramophone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GramophoneThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 448V416C352 398.328 337.674 384 320 384H64C46.326 384 32 398.328 32 416V448C14.326 448 0 462.328 0 480S14.326 512 32 512H352C369.674 512 384 497.672 384 480S369.674 448 352 448ZM48 416C48 407.176 55.178 400 64 400H320C328.822 400 336 407.176 336 416V448H48V416ZM352 496H32C23.178 496 16 488.824 16 480S23.178 464 32 464H352C360.822 464 368 471.176 368 480S360.822 496 352 496ZM56.201 320C60.67 320 65.266 318.711 69.518 315.82C125.434 277.625 204.104 234.961 288.346 225.934L331.219 234.906C352.875 241.406 368 261.719 368 284.344C368 312.812 344.828 335.969 316.359 335.969L168.016 335.875C163.594 335.875 160.016 339.469 160.016 343.875S163.594 351.875 168.016 351.875L316.359 351.969C353.656 351.969 384 321.625 384 284.344C384 254.719 364.188 228.094 335.156 219.406L288.648 209.629C226.459 169.957 178.531 71.176 150.893 13.555C146.484 4.375 137.906 0 129.352 0C119.227 0 109.135 6.125 106.018 17.664L32.893 289.801C28.396 306.285 41.621 320 56.201 320ZM121.465 21.836C122.965 16.281 128.297 16 129.35 16H129.352C131.617 16 134.691 16.777 136.467 20.473C162.445 74.637 206.105 165.652 265.318 212.73C200.576 223.719 131.928 253.812 60.521 302.59C59.125 303.539 57.713 304 56.201 304C53.703 304 51.066 302.66 49.48 300.582C48.021 298.672 47.645 296.523 48.344 293.953L121.465 21.836Z" })
  }
));
GramophoneThin.displayName = "GramophoneThin";
var Gramophone_default = GramophoneThin;
