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
var HelmetSafety_exports = {};
__export(HelmetSafety_exports, {
  default: () => HelmetSafety_default
});
module.exports = __toCommonJS(HelmetSafety_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HelmetSafetyRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M573.14 376.812C567.171 361.75 553.122 352 537.355 352H544.028V304C544.028 190.598 470.173 94.67 368.01 61.061V55.562C368.01 33.75 350.258 16 328.444 16H247.561C225.746 16 207.994 33.75 207.994 55.562V61.061C105.832 94.67 31.977 190.598 31.977 304V352H38.649C22.882 352 8.834 361.75 2.864 376.812C-2.73 390.937 0.02 407.406 9.803 418.656C16.616 426.562 82.341 496 288.002 496S559.389 426.562 566.124 418.75C575.984 407.406 578.734 390.938 573.14 376.812ZM79.981 304C79.981 217.756 133.034 144.221 207.994 112.771V296C207.994 309.25 218.745 320 231.997 320C245.248 320 255.999 309.25 255.999 296V64H320.005V296C320.005 309.25 330.757 320 344.008 320C357.259 320 368.01 309.25 368.01 296V112.771C442.971 144.221 496.023 217.756 496.023 304V352H79.981V304ZM288.002 448C156.786 448 90.357 417.812 62.573 400H513.415C485.631 417.812 419.203 448 288.002 448Z" })
  }
));
HelmetSafetyRegular.displayName = "HelmetSafetyRegular";
var HelmetSafety_default = HelmetSafetyRegular;
