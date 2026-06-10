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
const FaceKissDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.461 16 16 123.418 16 256C16 388.578 123.461 496 256 496S496 388.578 496 256C496 123.418 388.539 16 256 16ZM175.939 240C158.26 240 143.971 225.75 143.971 208S158.26 176 175.939 176C193.74 176 208.029 190.25 208.029 208S193.74 240 175.939 240ZM311.945 388.098C311.945 407.289 283.246 429.477 240.5 431.969C232.023 432.715 228.391 420.25 236.867 416.641L253.941 409.41C266.898 403.926 274.648 395.949 274.648 387.973C274.648 380 266.898 372.023 253.941 366.539L236.867 359.434C230.934 356.941 230.812 347.219 236.867 344.602L253.941 337.5C266.898 332.016 274.648 324.039 274.648 316.063S266.898 300.109 253.941 294.625L236.867 287.398C228.27 283.781 232.145 270.945 240.5 272.07C283.246 274.563 311.945 296.746 311.945 315.938C311.945 328.898 298.625 343.109 276.828 351.828C298.625 360.93 311.945 375.137 311.945 388.098ZM336.061 240C318.275 240 304 225.75 304 208S318.275 176 336.061 176C353.725 176 368 190.25 368 208S353.725 240 336.061 240Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M175.969 176C158.289 176 144 190.25 144 208S158.289 240 175.969 240C193.77 240 208.059 225.75 208.059 208S193.77 176 175.969 176ZM336.09 176C318.305 176 304.029 190.25 304.029 208S318.305 240 336.09 240C353.754 240 368.029 225.75 368.029 208S353.754 176 336.09 176Z" })
    ]
  }
));
FaceKissDuotone.displayName = "FaceKissDuotone";
var FaceKiss_default = FaceKissDuotone;
