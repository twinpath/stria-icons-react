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
var GarageCar_exports = {};
__export(GarageCar_exports, {
  default: () => GarageCar_default
});
module.exports = __toCommonJS(GarageCar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GarageCarLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 400C215.164 400 208 407.164 208 416S215.164 432 224 432C232.838 432 240 424.836 240 416S232.838 400 224 400ZM447.105 354.67L421.312 290.203C413 269.422 393.172 256 370.797 256H262.172C237.969 256 217.031 271.578 210.062 294.766L192.008 354.945C173.422 361.568 160 379.166 160 400V432C160 452.832 173.416 470.426 192 477.053V496C192 504.836 199.164 512 208 512C216.838 512 224 504.836 224 496V480H416V496C416 504.836 423.164 512 432 512C440.838 512 448 504.836 448 496V477.053C466.584 470.426 480 452.832 480 432V400C480 378.84 466.15 361.043 447.105 354.67ZM240.719 303.969C243.531 294.562 252.359 288 262.172 288H370.797C380.016 288 388.172 293.531 391.594 302.078L411.566 352H226.305L240.719 303.969ZM448 432C448 440.828 440.828 448 432 448H208C199.172 448 192 440.828 192 432V400C192 391.172 199.172 384 208 384H432C440.828 384 448 391.172 448 400V432ZM610.625 118.375L338.625 3.75C326.75 -1.25 313.25 -1.25 301.375 3.75L29.375 118.375C11.625 125.75 0 143.25 0 162.5V496C0 504.801 7.201 512 16 512C24.801 512 32 504.801 32 496V162.5C32 156.125 35.875 150.25 41.75 147.75L313.75 33.125C317.75 31.5 322.25 31.5 326.25 33.125L598.25 147.75C604.125 150.25 608 156.125 608 162.5V496C608 504.801 615.201 512 624 512C632.801 512 640 504.801 640 496V162.5C640 143.25 628.375 125.75 610.625 118.375ZM512 192H128C110.4 192 96 206.4 96 224V496C96 504.801 103.201 512 112 512C120.801 512 128 504.801 128 496V224H512V496C512 504.801 519.201 512 528 512C536.801 512 544 504.801 544 496V224C544 206.4 529.6 192 512 192ZM416 400C407.164 400 400 407.164 400 416S407.164 432 416 432C424.838 432 432 424.836 432 416S424.838 400 416 400Z" })
  }
));
GarageCarLight.displayName = "GarageCarLight";
var GarageCar_default = GarageCarLight;
