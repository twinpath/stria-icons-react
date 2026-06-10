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
var Palette_exports = {};
__export(Palette_exports, {
  default: () => Palette_default
});
module.exports = __toCommonJS(Palette_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PaletteRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M127.991 223.932C110.24 223.932 95.99 238.179 95.99 255.926S110.24 287.919 127.991 287.919S159.991 273.672 159.991 255.926S145.616 223.932 127.991 223.932ZM418.623 58.09C359.246 9.225 281.244 -10.021 204.618 4.976C104.865 24.347 24.738 104.206 5.113 203.686C-11.638 287.795 13.238 371.903 72.864 434.14C120.241 483.631 182.617 512 240.743 512C249.619 512 258.244 511.375 266.869 510C291.12 506.251 311.495 491.254 322.995 468.884C335.246 444.888 335.246 416.144 323.245 392.274C317.12 380.276 317.745 366.154 324.995 354.281C331.996 342.534 343.746 335.91 356.996 335.91H429.248C475.624 335.91 512 300.167 512 254.676C511.75 178.191 477.749 106.581 418.623 58.09ZM429.248 287.919H356.996C327.121 287.919 299.745 303.291 283.994 329.161C267.994 355.281 266.744 387.025 280.369 414.144C285.495 424.142 285.495 436.765 280.244 447.013C277.619 452.012 271.494 460.635 259.619 462.635C210.243 470.258 150.741 446.013 107.615 401.022C58.739 350.157 38.614 281.671 52.239 213.059C68.114 132.45 132.991 67.713 213.743 52.091C276.369 39.719 339.871 55.591 388.122 95.208C436.248 134.7 463.749 192.688 463.999 254.676C463.999 273.297 448.748 287.919 429.248 287.919ZM159.991 127.951C142.241 127.951 127.991 142.198 127.991 159.945S142.241 191.939 159.991 191.939S191.992 177.691 191.992 159.945S177.617 127.951 159.991 127.951ZM255.994 95.833C238.243 95.833 223.993 110.205 223.993 127.826C223.993 145.573 238.243 159.82 255.994 159.82C273.744 159.82 287.995 145.573 287.995 127.826C287.995 110.205 273.744 95.833 255.994 95.833ZM351.996 127.951C334.246 127.951 319.995 142.198 319.995 159.945S334.246 191.939 351.996 191.939S383.997 177.691 383.997 159.945S369.747 127.951 351.996 127.951Z" })
  }
));
PaletteRegular.displayName = "PaletteRegular";
var Palette_default = PaletteRegular;
