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
var Tornado_exports = {};
__export(Tornado_exports, {
  default: () => Tornado_default
});
module.exports = __toCommonJS(Tornado_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TornadoDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M387.642 195.906C365.64 170.598 348.71 151.031 348.64 128H12.044C23.528 168.404 42.419 199.344 65.206 224H410.984C403.396 214.146 395.403 204.834 387.642 195.906ZM407.767 42.094C415.298 35.531 417.985 24.969 414.454 15.594C410.954 6.219 401.985 0 391.985 0L24.146 0.031C11.146 0.031 0.489 10.406 0.146 23.406C-0.559 50.35 1.337 74.225 4.939 96H358.8C367.866 80.766 383.357 63.367 407.767 42.094ZM431.653 256H100.468C127.062 276.24 155.757 291.627 182.394 305.844C210.568 320.871 236.452 334.738 257.153 352H443.896C446.355 341.143 447.98 330.438 447.985 320C447.999 295.439 441.349 274.602 431.653 256ZM303.581 485.344C302.456 495.469 307.831 505.188 317.017 509.625C320.329 511.219 323.892 512 327.423 512C333.642 512 339.767 509.594 344.36 505C388.066 461.414 417.671 421.371 433.698 384H285.136C300.81 408.627 308.634 440.049 303.581 485.344Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M358.861 96H5C6.869 107.291 9.248 117.945 12.105 128H348.701C348.67 118.219 351.875 107.744 358.861 96ZM257.215 352C268.365 361.299 277.551 371.986 285.197 384H433.76C438.439 373.09 441.586 362.475 443.957 352H257.215ZM411.045 224H65.268C76.307 235.945 88.141 246.57 100.529 256H431.715C425.75 244.557 418.695 233.936 411.045 224Z" })
    ]
  }
));
TornadoDuotone.displayName = "TornadoDuotone";
var Tornado_default = TornadoDuotone;
