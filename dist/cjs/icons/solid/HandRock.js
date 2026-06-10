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
var HandRock_exports = {};
__export(HandRock_exports, {
  default: () => HandRock_default
});
module.exports = __toCommonJS(HandRock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandRockSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 96C390.852 96 382.385 98.697 375.107 103.143C370.941 80.869 351.467 64 328 64C311.287 64 296.598 72.568 288 85.531V80C288 53.484 266.5 32 240 32C227.5 32 216.213 36.896 207.67 44.73C205.959 19.77 185.381 0 160 0C133.5 0 112 21.484 112 48V176C112 184.836 104.836 192 96 192S80 184.836 80 176V130.516L50 154.516C38.625 163.625 32 177.422 32 192V261.205C32 294.33 48 325.768 74.812 345.33L128 384V512H384V384C422.551 358.135 448 314.191 448 264.377V144C448 117.484 426.5 96 400 96Z" })
  }
));
HandRockSolid.displayName = "HandRockSolid";
var HandRock_default = HandRockSolid;
