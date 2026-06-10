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
var HockeySticks_exports = {};
__export(HockeySticks_exports, {
  default: () => HockeySticks_default
});
module.exports = __toCommonJS(HockeySticks_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HockeySticksThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M232.385 219.953C235.334 225.848 243.75 225.844 246.697 219.949C247.822 217.695 247.822 215.047 246.695 212.793L162.561 44.562L219.756 16.039V16C219.822 16.012 219.848 16.062 219.859 16.086L277.068 130.547C280.016 136.445 288.434 136.445 291.381 130.547C292.506 128.293 292.506 125.641 291.381 123.391L234.125 8.84C231.289 3.258 225.629 0 219.768 0C217.359 0 214.918 0.551 212.625 1.715L155.375 30.215C149.469 33.215 146.164 39.379 146.568 45.594C146.703 47.668 147.25 49.75 148.25 51.719L232.385 219.953ZM608.002 351.977L415.5 351.965C412.346 351.965 409.357 351.07 406.842 349.469C403.105 347.086 398.152 348.301 395.848 352.086C393.516 355.914 394.828 360.836 398.639 363.199C403.561 366.25 409.354 367.965 415.5 367.965H544V495.965H528V496H417.875C399.879 496 383.078 485.598 375.078 469.504L362.936 445.227C359.988 439.332 351.576 439.332 348.627 445.227C347.5 447.477 347.5 450.129 348.627 452.383L360.75 476.625C371.5 498.25 393.75 512 417.875 512L560 511.965H608C625.6 511.965 640 497.563 640 479.965V383.977C640 366.375 625.602 351.977 608.002 351.977ZM624 479.965C624 488.789 616.822 495.965 608 495.965H560V367.969L607.998 367.977C616.822 367.977 624 375.152 624 383.977V479.965ZM493.432 45.594C493.836 39.379 490.531 33.215 484.625 30.215L427.375 1.715C425.082 0.551 422.641 0 420.232 0C414.371 0 408.711 3.258 405.875 8.84L238.75 343.215C236.125 348.59 230.625 351.965 224.5 351.965L32 351.977C14.4 351.977 0 366.375 0 383.977V479.965C0 497.566 14.4 511.965 32 511.965H80L222.125 512C246.25 512 268.5 498.25 279.25 476.625L491.75 51.719C492.75 49.75 493.297 47.668 493.432 45.594ZM80 495.965H32C23.178 495.965 16 488.789 16 479.965V383.977C16 375.152 23.178 367.977 32.002 367.977L80 367.969V495.965ZM264.922 469.504C256.922 485.598 240.121 496 222.125 496H112V495.965H96V367.965H224.5C236.818 367.965 247.787 361.172 253.062 350.367L420.141 16.086C420.152 16.062 420.178 16.012 420.244 16V16.039L477.439 44.562L264.922 469.504Z" })
  }
));
HockeySticksThin.displayName = "HockeySticksThin";
var HockeySticks_default = HockeySticksThin;
