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
var Raindrops_exports = {};
__export(Raindrops_exports, {
  default: () => Raindrops_default
});
module.exports = __toCommonJS(Raindrops_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RaindropsThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 224C58.855 224 53.711 226.643 50.557 231.93C31.787 263.402 0 320.643 0 347.359C0 385.268 28.654 416 64 416S128 385.268 128 347.359C128 320.643 96.215 263.402 77.443 231.93C74.291 226.643 69.146 224 64 224ZM64 400C37.533 400 16 376.385 16 347.359C16 331.01 33.867 291.256 64.02 240.658C94.072 291.117 112 330.979 112 347.359C112 376.385 90.467 400 64 400ZM224 155.359C224 128.643 192.215 71.402 173.443 39.93C170.291 34.643 165.146 32 160 32C154.855 32 149.711 34.643 146.557 39.93C127.787 71.402 96 128.643 96 155.359C96 193.268 124.654 224 160 224S224 193.268 224 155.359ZM160 208C133.533 208 112 184.385 112 155.359C112 139.01 129.867 99.256 160.02 48.658C190.072 99.117 208 138.979 208 155.359C208 184.385 186.467 208 160 208ZM334.596 135.506C331.137 130.502 325.568 128 320 128S308.863 130.502 305.406 135.506C271.836 184.074 192 305.162 192 358.262C192 425.494 249.309 480 320 480S448 425.494 448 358.262C448 305.162 368.164 184.074 334.596 135.506ZM320 464C258.244 464 208 416.564 208 358.262C208 325.146 250.367 243.277 318.568 144.602C318.93 144.078 319.621 144 320 144L321.434 144.602C389.633 243.277 432 325.146 432 358.262C432 416.564 381.758 464 320 464Z" })
  }
));
RaindropsThin.displayName = "RaindropsThin";
var Raindrops_default = RaindropsThin;
