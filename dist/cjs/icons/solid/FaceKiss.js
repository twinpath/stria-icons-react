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
const FaceKissSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.461 16 16 123.419 16 256S123.461 496 256 496S496 388.581 496 256S388.539 16 256 16ZM175.939 240C158.26 240 143.971 225.75 143.971 208S158.26 176 175.939 176C193.74 176 208.029 190.25 208.029 208S193.74 240 175.939 240ZM311.945 388.098C311.945 407.291 283.246 429.475 240.5 431.968C232.023 432.716 228.391 420.253 236.867 416.638L253.941 409.41C266.898 403.926 274.648 395.95 274.648 387.974S266.898 372.021 253.941 366.538L236.867 359.434C230.934 356.941 230.812 347.22 236.867 344.603L253.941 337.499C266.898 332.016 274.648 324.039 274.648 316.063C274.648 308.087 266.898 300.111 253.941 294.627L236.867 287.398C228.27 283.784 232.145 270.948 240.5 272.069C283.246 274.562 311.945 296.746 311.945 315.938C311.945 328.9 298.625 343.108 276.828 351.832C298.625 360.929 311.945 375.137 311.945 388.098ZM336.06 240C318.276 240 304 225.75 304 208S318.276 176 336.06 176C353.724 176 368 190.25 368 208S353.724 240 336.06 240Z" })
  }
));
FaceKissSolid.displayName = "FaceKissSolid";
var FaceKiss_default = FaceKissSolid;
