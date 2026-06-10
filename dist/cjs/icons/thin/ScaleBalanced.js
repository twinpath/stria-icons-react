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
var ScaleBalanced_exports = {};
__export(ScaleBalanced_exports, {
  default: () => ScaleBalanced_default
});
module.exports = __toCommonJS(ScaleBalanced_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScaleBalancedThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M634.405 279.094L525.343 103.125C522.186 98.375 517.093 96 511.999 96S501.812 98.375 498.655 103.125L389.593 279.094C385.718 284.875 383.5 291.812 384.093 298.734C389.562 364.406 444.749 416 511.999 416S634.436 364.406 639.905 298.734C640.498 291.812 638.28 284.875 634.405 279.094ZM403.191 287.521L511.917 112.01C511.925 112.008 511.956 112 511.999 112L511.741 111.553L621.116 288H402.953C403.058 287.836 403.082 287.686 403.191 287.521ZM511.999 400C456.304 400 409.168 358.289 401.242 304H622.76C614.854 358.273 567.706 400 511.999 400ZM255.907 298.734C256.5 291.812 254.282 284.875 250.407 279.094L141.345 103.125C138.188 98.375 133.095 96 128.001 96C122.907 96 117.814 98.375 114.657 103.125L5.595 279.094C1.72 284.875 -0.498 291.812 0.095 298.734C5.564 364.406 60.751 416 128.001 416S250.438 364.406 255.907 298.734ZM19.193 287.521L127.919 112.01C127.927 112.008 127.958 112 128.001 112L127.743 111.553L237.118 288H18.955C19.06 287.836 19.084 287.686 19.193 287.521ZM17.244 304H238.762C230.856 358.273 183.708 400 128.001 400C72.306 400 25.17 358.289 17.244 304ZM535.999 496H328V128C328 127.697 327.711 127.52 327.68 127.227C359.359 123.391 384 96.715 384 64H535.999C540.405 64 543.999 60.422 543.999 56S540.405 48 535.999 48H384C383.218 48 382.711 48.619 381.992 48.83C375.156 20.846 350.094 0 320 0S264.844 20.846 258.008 48.83C257.289 48.619 256.782 48 256 48H104.001C99.595 48 96.001 51.578 96.001 56S99.595 64 104.001 64H256C256 96.715 280.641 123.391 312.32 127.227C312.289 127.52 312 127.697 312 128V496H104.001C99.595 496 96.001 499.578 96.001 504S99.595 512 104.001 512H312H328H535.999C540.405 512 543.999 508.422 543.999 504S540.405 496 535.999 496ZM272 64C272 37.533 293.531 16 320 16S368 37.533 368 64S346.469 112 320 112S272 90.467 272 64Z" })
  }
));
ScaleBalancedThin.displayName = "ScaleBalancedThin";
var ScaleBalanced_default = ScaleBalancedThin;
