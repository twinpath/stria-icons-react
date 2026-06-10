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
var FaceKiss_exports = {};
__export(FaceKiss_exports, {
  default: () => FaceKiss_default
});
module.exports = __toCommonJS(FaceKiss_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceKissLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M276.949 344.375C298.625 335.25 311.945 321 311.945 308C311.945 288.75 283.246 266.5 240.5 264C236.746 263.625 233.113 266.375 232.266 270.25C231.418 274 233.355 277.875 236.988 279.375L253.941 286.625C266.898 292.125 274.648 300.125 274.648 308.125S266.898 324.125 253.941 329.625L236.988 336.75C231.297 339.25 231.055 349 236.988 351.625L253.941 358.75C266.898 364.25 274.648 372.25 274.648 380.25S266.898 396.25 253.941 401.75L236.988 409C233.355 410.5 231.418 414.375 232.266 418.25C233.113 421.75 236.383 424.375 240.137 424.375H240.621C283.367 421.875 312.066 399.625 312.066 380.375C312.066 367.375 298.746 353.125 276.949 344.375ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM175.955 184C162.707 184 152 194.688 152 208S162.707 232 175.955 232C189.293 232 200 221.312 200 208S189.293 184 175.955 184ZM335.955 184C322.707 184 312 194.688 312 208S322.707 232 335.955 232C349.293 232 360 221.312 360 208S349.293 184 335.955 184Z" })
  }
));
FaceKissLight.displayName = "FaceKissLight";
var FaceKiss_default = FaceKissLight;
