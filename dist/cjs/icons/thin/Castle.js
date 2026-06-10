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
var Castle_exports = {};
__export(Castle_exports, {
  default: () => Castle_default
});
module.exports = __toCommonJS(Castle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CastleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M608 160H576C558.326 160 544 174.326 544 192V224H512V32C512 14.326 497.674 0 480 0H440C422.326 0 408 14.326 408 32V64H376V32C376 14.326 361.674 0 344 0H296C278.326 0 264 14.326 264 32V64H232V32C232 14.326 217.674 0 200 0H160C142.326 0 128 14.326 128 32V224H96V192C96 174.326 81.674 160 64 160H32C14.326 160 0 174.326 0 192V448C0 483.346 28.654 512 64 512H576C611.346 512 640 483.346 640 448V192C640 174.326 625.674 160 608 160ZM144 32C144 23.178 151.178 16 160 16H200C208.822 16 216 23.178 216 32V80H280V32C280 23.178 287.178 16 296 16H344C352.822 16 360 23.178 360 32V80H424V32C424 23.178 431.178 16 440 16H480C488.822 16 496 23.178 496 32V224H144V32ZM256 496V384C256 348.654 284.654 320 320 320S384 348.654 384 384V496H256ZM624 448C624 474.467 602.467 496 576 496H400V384C400 339.889 364.111 304 320 304S240 339.889 240 384V496H64C37.533 496 16 474.467 16 448V192C16 183.178 23.178 176 32 176H64C72.822 176 80 183.178 80 192V240H560V192C560 183.178 567.178 176 576 176H608C616.822 176 624 183.178 624 192V448Z" })
  }
));
CastleThin.displayName = "CastleThin";
var Castle_default = CastleThin;
