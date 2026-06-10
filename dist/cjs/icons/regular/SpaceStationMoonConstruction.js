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
var SpaceStationMoonConstruction_exports = {};
__export(SpaceStationMoonConstruction_exports, {
  default: () => SpaceStationMoonConstruction_default
});
module.exports = __toCommonJS(SpaceStationMoonConstruction_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SpaceStationMoonConstructionRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M472 232C458.75 232 448 242.75 448 256C448 262.188 447.625 268.609 446.859 275.438C327.328 334.594 184.672 334.594 65.141 275.438C64.375 268.609 64 262.188 64 256C64 200.537 87.775 150.646 125.504 115.564C116.99 128.279 112 143.551 112 160C112 204.182 147.818 240 192 240C236.184 240 272 204.182 272 160C272 115.816 236.184 80 192 80C186.584 80 181.303 80.568 176.189 81.594C200.531 70.408 227.502 64 256 64C298.75 64 340.062 78.484 373.359 104.141C361.344 105.453 352 115.641 352 128C352 141.25 362.75 152 376 152H430C439.047 152 447.344 146.906 451.422 138.828S454.688 121.047 449.328 113.766C404.219 52.547 331.953 16 256 16C123.656 16 16 123.656 16 256C16 268.25 17.125 280.973 19.424 294.914C19.428 294.938 19.418 294.961 19.422 294.984C38.5 411.469 138 496 256 496C323.641 496 388.453 467.188 433.828 416.938C442.719 407.109 441.938 391.938 432.094 383.047C422.281 374.156 407.047 374.906 398.203 384.781C361.922 424.953 310.094 448 256 448C178.83 448 112.195 402.408 81.893 334.992C137.275 356.568 196.508 368 256 368C333.812 368 411.312 348.75 480.125 312.328C486.75 308.812 491.344 302.406 492.562 295.016C494.875 281.031 496 268.281 496 256C496 242.75 485.25 232 472 232ZM192 128C209.645 128 224 142.355 224 160S209.645 192 192 192S160 177.645 160 160S174.355 128 192 128ZM424 184H376C362.75 184 352 194.75 352 208S362.75 232 376 232H424C437.25 232 448 221.25 448 208S437.25 184 424 184Z" })
  }
));
SpaceStationMoonConstructionRegular.displayName = "SpaceStationMoonConstructionRegular";
var SpaceStationMoonConstruction_default = SpaceStationMoonConstructionRegular;
