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
var VenusMars_exports = {};
__export(VenusMars_exports, {
  default: () => VenusMars_default
});
module.exports = __toCommonJS(VenusMars_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VenusMarsThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M264 408H184V351.596C277.459 347.385 352 270.5 352 176C352 78.799 273.201 0 176 0S0 78.799 0 176C0 270.5 74.541 347.385 168 351.596V408H88C83.594 408 80 411.594 80 416S83.594 424 88 424H168V504C168 508.406 171.594 512 176 512S184 508.406 184 504V424H264C268.406 424 272 420.406 272 416S268.406 408 264 408ZM176 336C87.775 336 16 264.225 16 176S87.775 16 176 16S336 87.775 336 176S264.225 336 176 336ZM632 0H488C483.578 0 480 3.578 480 8S483.578 16 488 16H612.688L518.461 110.227C487.152 81.619 445.643 64 400 64C394.344 64 388.75 64.25 383.25 64.781C378.844 65.219 375.625 69.125 376.031 73.5C376.469 77.906 380.344 81.281 384.75 80.719C389.75 80.25 394.844 80 400 80C488.219 80 560 151.781 560 240S488.219 400 400 400C360.562 400 322.688 385.531 293.344 359.25C290.094 356.375 285.031 356.625 282.031 359.875C279.094 363.187 279.375 368.219 282.656 371.187C314.969 400.094 356.625 416 400 416C497.031 416 576 337.031 576 240C576 194.357 558.381 152.848 529.773 121.539L624 27.312V152C624 156.422 627.578 160 632 160S640 156.422 640 152V8C640 3.578 636.422 0 632 0Z" })
  }
));
VenusMarsThin.displayName = "VenusMarsThin";
var VenusMars_default = VenusMarsThin;
