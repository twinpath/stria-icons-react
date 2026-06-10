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
var Leaf_exports = {};
__export(Leaf_exports, {
  default: () => Leaf_default
});
module.exports = __toCommonJS(Leaf_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LeafLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M486.063 41.363C485.156 39.55 483.578 37.425 482.047 36.05C478.438 32.832 473.594 31.394 468.781 32.238C464 33.05 459.844 35.957 457.469 40.175C431.797 85.829 385.859 112.016 331.422 112.016H262.859C170.859 112.016 96 187.919 96 281.227C96 286.854 96.473 292.453 97.043 298.039C49.301 339.524 14.258 395.789 0.361 460.657C-1.498 469.282 4.002 477.781 12.643 479.656C13.783 479.875 14.908 480 16.018 480C23.393 480 30.033 474.875 31.643 467.344C42.76 415.483 68.998 369.763 104.939 334.149C107.906 343.004 111.34 351.701 115.766 359.943C115.766 359.943 115.766 359.943 115.766 359.974C145 414.253 201.359 448.001 262.859 448.001C268.844 448.001 274.828 447.689 279.938 447.095C414.406 437.346 512 319.413 512 166.638C512 123.828 502.656 78.392 486.063 41.363ZM276.969 415.222C272.359 415.753 267.625 416.003 262.859 416.003C213.156 416.003 167.594 388.723 143.953 344.787C137.658 333.061 133.85 321.624 131.471 311.13C176.895 276.513 233.176 256.01 293.082 256.01H336.004C344.848 256.01 352.004 248.854 352.004 240.01S344.848 224.011 336.004 224.011H293.082C233.164 224.011 176.451 242.299 128.762 273.806C132.768 202.781 192.254 144.014 262.859 144.014H331.422C385.625 144.014 434.469 121.328 467.266 82.111C475.469 108.703 480 138.265 480 166.638C480 302.164 394.891 406.691 276.969 415.222Z" })
  }
));
LeafLight.displayName = "LeafLight";
var Leaf_default = LeafLight;
