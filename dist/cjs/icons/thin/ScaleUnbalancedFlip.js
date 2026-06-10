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
var ScaleUnbalancedFlip_exports = {};
__export(ScaleUnbalancedFlip_exports, {
  default: () => ScaleUnbalancedFlip_default
});
module.exports = __toCommonJS(ScaleUnbalancedFlip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScaleUnbalancedFlipThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M389.593 375.094C385.718 380.875 383.5 387.812 384.093 394.734C389.562 460.406 444.749 512 511.999 512S634.436 460.406 639.905 394.734C640.498 387.812 638.28 380.875 634.405 375.094L525.343 199.125C522.186 194.375 517.093 192 511.999 192C506.905 192 501.812 194.375 498.655 199.125L389.593 375.094ZM621.045 384H402.882L512.257 207.553L511.999 208C512.042 208 512.073 208.008 512.081 208.01L620.807 383.521C620.916 383.686 620.94 383.836 621.045 384ZM401.238 400H622.756C614.83 454.289 567.694 496 511.999 496C456.292 496 409.144 454.273 401.238 400ZM0.095 266.734C5.564 332.406 60.751 384 128.001 384S250.438 332.406 255.907 266.734C256.5 259.812 254.282 252.875 250.407 247.094L141.345 71.125C138.188 66.375 133.095 64 128.001 64C122.907 64 117.814 66.375 114.657 71.125L5.595 247.094C1.72 252.875 -0.498 259.812 0.095 266.734ZM237.047 256H18.884L128.259 79.553L128.001 80C128.044 80 128.075 80.008 128.083 80.01L236.809 255.521C236.918 255.686 236.942 255.836 237.047 256ZM17.24 272H238.758C230.832 326.289 183.696 368 128.001 368C72.294 368 25.146 326.273 17.24 272ZM96.001 504C96.001 508.422 99.595 512 104.001 512H320C324.418 512 328 508.418 328 504V127.193C344.465 125.117 358.849 116.891 368.963 104.76L533.468 159.594C534.311 159.875 535.155 160 535.999 160C539.343 160 542.468 157.875 543.593 154.531C544.999 150.344 542.718 145.813 538.53 144.406L377.91 90.867C381.72 82.674 384 73.631 384 64C384 28.654 355.345 0 320 0C289.219 0 263.549 21.748 257.424 50.705L106.532 0.406C102.314 -0.938 97.814 1.281 96.407 5.469S97.282 14.187 101.47 15.594L256.325 67.213C257.897 98.328 281.539 123.352 312 127.193V496H104.001C99.595 496 96.001 499.578 96.001 504ZM320 112C293.533 112 272 90.467 272 64S293.533 16 320 16C346.467 16 368 37.533 368 64S346.467 112 320 112Z" })
  }
));
ScaleUnbalancedFlipThin.displayName = "ScaleUnbalancedFlipThin";
var ScaleUnbalancedFlip_default = ScaleUnbalancedFlipThin;
