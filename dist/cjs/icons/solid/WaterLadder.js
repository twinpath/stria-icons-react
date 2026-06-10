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
const WaterLadderSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M562.406 416.4C533.98 413.408 507.643 400.877 491.871 381.689C485.42 373.838 473.787 375.174 467.123 382.846C428.029 427.842 335.92 426.697 300.02 381.689C297.023 377.932 292.486 376.037 287.986 375.998C283.486 376.037 278.977 377.932 275.98 381.689C240.08 426.697 147.971 427.842 108.877 382.846C102.213 375.174 90.58 373.838 84.129 381.689C68.357 400.877 42.02 413.408 13.594 416.4C5.688 417.205 0 424.162 0 432.018V464.049C0.002 473.1 7.637 480.729 16.715 479.943C45.52 477.455 72.824 468.611 96.129 454.189C152.615 488.58 232.99 488.104 287.986 454.268C342.982 488.104 423.385 488.58 479.871 454.189C503.176 468.611 530.48 477.455 559.285 479.943C568.363 480.729 575.998 473.1 576 464.049V432.018C576 424.162 570.312 417.205 562.406 416.4ZM480 32C427 32 384 75 384 128V224H192V128C192 110.375 206.375 96 224 96S256 110.375 256 128V144C256 152.875 263.125 160 272 160H304C312.875 160 320 152.875 320 144V128C320 75 277 32 224 32S128 75 128 128V357.164C129.719 358.678 131.508 360.1 133.033 361.857C144.85 375.459 167.422 383.9 192 383.99V288H384V383.99C408.578 383.9 431.15 375.459 442.965 361.861C444.492 360.104 446.281 358.68 448 357.166V128C448 110.375 462.375 96 480 96S512 110.375 512 128V144C512 152.875 519.125 160 528 160H560C568.875 160 576 152.875 576 144V128C576 75 533 32 480 32Z" })
  }
));
WaterLadderSolid.displayName = "WaterLadderSolid";
var WaterLadder_default = WaterLadderSolid;
