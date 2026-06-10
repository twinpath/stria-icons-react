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
var Microwave_exports = {};
__export(Microwave_exports, {
  default: () => Microwave_default
});
module.exports = __toCommonJS(Microwave_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MicrowaveThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 32H48C21.5 32 0 53.5 0 80V400C0 426.5 21.5 448 48 448H528C554.5 448 576 426.5 576 400V80C576 53.5 554.5 32 528 32ZM560 400C560 417.645 545.645 432 528 432H48C30.355 432 16 417.645 16 400V80C16 62.355 30.355 48 48 48H528C545.645 48 560 62.355 560 80V400ZM390.4 120H121.6C103.043 120 88 135.352 88 154.285V325.715C88 344.648 103.043 360 121.6 360H390.4C408.957 360 424 344.648 424 325.715V154.285C424 135.352 408.957 120 390.4 120ZM408 325.715C408 335.797 400.105 344 390.4 344H121.6C111.895 344 104 335.797 104 325.715V154.285C104 144.203 111.895 136 121.6 136H390.4C400.105 136 408 144.203 408 154.285V325.715ZM496 224C478.359 224 464 238.359 464 256S478.359 288 496 288S528 273.641 528 256S513.641 224 496 224ZM496 272C487.172 272 480 264.828 480 256S487.172 240 496 240S512 247.172 512 256S504.828 272 496 272ZM496 128C478.359 128 464 142.359 464 160S478.359 192 496 192S528 177.641 528 160S513.641 128 496 128ZM496 176C487.172 176 480 168.828 480 160S487.172 144 496 144S512 151.172 512 160S504.828 176 496 176ZM128 464H64C59.578 464 56 467.578 56 472S59.578 480 64 480H128C132.422 480 136 476.422 136 472S132.422 464 128 464ZM512 464H448C443.578 464 440 467.578 440 472S443.578 480 448 480H512C516.422 480 520 476.422 520 472S516.422 464 512 464Z" })
  }
));
MicrowaveThin.displayName = "MicrowaveThin";
var Microwave_default = MicrowaveThin;
