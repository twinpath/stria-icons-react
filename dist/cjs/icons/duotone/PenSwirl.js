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
var PenSwirl_exports = {};
__export(PenSwirl_exports, {
  default: () => PenSwirl_default
});
module.exports = __toCommonJS(PenSwirl_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenSwirlDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M484.654 183.24L444.947 222.938C446.826 233.701 448 244.707 448 256C448 310.828 403.406 355.422 348.562 355.422C334.365 355.422 320.916 352.322 308.687 346.936C306.352 347.66 304.236 348.91 301.812 349.391L245.053 360.748C271.693 387.08 308.236 403.422 348.562 403.422C429.875 403.422 496 337.281 496 256C496 230.635 491.979 206.207 484.654 183.24ZM256 448C150.125 448 64 361.875 64 256S150.125 64 256 64C267.293 64 278.299 65.174 289.062 67.053L328.766 27.348C305.797 20.021 281.367 16 256 16C123.656 16 16 123.656 16 256S123.656 496 256 496C269.25 496 280 485.25 280 472S269.25 448 256 448Z ", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512.001 69.787C512.001 58.527 507.705 47.267 499.114 38.676L473.325 12.887C464.733 4.295 453.473 -0.001 442.213 -0.001S419.692 4.295 411.1 12.887L215.692 208.305C212.62 211.377 210.528 215.289 209.677 219.547L192.22 306.834C192.071 307.577 192 308.312 192 309.032C192 315.044 196.954 319.997 202.965 319.997C203.685 319.997 204.42 319.926 205.163 319.777L292.454 302.318C296.712 301.467 300.622 299.373 303.692 296.303L499.11 100.904C507.704 92.312 512.001 81.049 512.001 69.787Z " })
    ]
  }
));
PenSwirlDuotone.displayName = "PenSwirlDuotone";
var PenSwirl_default = PenSwirlDuotone;
