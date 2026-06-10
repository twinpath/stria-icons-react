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
var WaterLadder_exports = {};
__export(WaterLadder_exports, {
  default: () => WaterLadder_default
});
module.exports = __toCommonJS(WaterLadder_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WaterLadderLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M562.038 447.094C533.9 443.469 508.743 428.75 493.009 406.719C487.009 398.281 472.964 398.281 466.964 406.719C448.527 432.562 417.511 448 383.997 448C350.482 448 319.468 432.562 301.031 406.719C294.999 398.281 280.999 398.281 274.968 406.719C256.531 432.562 225.517 448 192.001 448C158.488 448 127.472 432.562 109.034 406.719C106.034 402.5 101.175 400 96.003 400S85.988 402.5 82.988 406.719C67.255 428.75 42.099 443.469 13.958 447.094C5.193 448.219 -0.993 456.25 0.132 465.031C1.257 473.781 9.161 480.094 18.052 478.844C48.036 474.969 75.536 461.375 95.988 440.75C120.613 465.594 155.222 480 192.001 480C228.767 480 263.374 465.594 287.999 440.75C312.624 465.594 347.232 480 383.997 480C420.777 480 455.386 465.594 480.011 440.75C500.462 461.375 527.962 474.969 557.947 478.844C566.898 480.219 574.741 473.781 575.866 465.031C576.991 456.25 570.804 448.219 562.038 447.094ZM143.999 384C152.843 384 159.999 376.844 159.999 368V256H383.999V368C383.999 376.844 391.156 384 399.999 384S415.999 376.844 415.999 368V112C415.999 85.531 437.531 64 463.999 64S511.999 85.531 511.999 112V128C511.999 136.844 519.156 144 527.999 144S543.999 136.844 543.999 128V112C543.999 67.891 508.109 32 463.999 32S383.999 67.891 383.999 112V224H159.999V112C159.999 85.531 181.531 64 207.999 64S255.999 85.531 255.999 112V128C255.999 136.844 263.156 144 271.999 144S287.999 136.844 287.999 128V112C287.999 67.891 252.109 32 207.999 32S127.999 67.891 127.999 112V368C127.999 376.844 135.156 384 143.999 384Z" })
  }
));
WaterLadderLight.displayName = "WaterLadderLight";
var WaterLadder_default = WaterLadderLight;
