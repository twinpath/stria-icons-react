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
var AlarmPlus_exports = {};
__export(AlarmPlus_exports, {
  default: () => AlarmPlus_default
});
module.exports = __toCommonJS(AlarmPlus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AlarmPlusThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 101C16 54.125 54.125 16 101 16C119.094 16 145.5 26.406 158.688 38.734C160.243 40.17 162.214 40.883 164.175 40.883C168.64 40.883 172.161 37.258 172.161 32.897C172.161 19.418 126.014 0 101 0C45.312 0 0 45.312 0 101.031C0.068 118.87 11.259 158.652 22.822 158.652C27.398 158.652 30.844 154.96 30.844 150.65C30.844 145.587 16.125 127.666 16 101ZM411 0C383.133 0 339.842 21.051 339.842 32.865C339.842 37.33 343.507 40.866 347.88 40.866C349.817 40.866 351.756 40.162 353.281 38.719C366.531 26.406 392.969 16 411 16C457.875 16 496 54.125 496 100.969C495.876 127.503 481.181 145.654 481.181 150.617C481.181 155.166 484.941 158.65 489.17 158.65C500.859 158.65 511.933 118.659 512 101C512 45.312 466.688 0 411 0ZM256 64C132.289 64 32 164.287 32 288C32 346.975 54.969 400.463 92.223 440.465L34.344 498.344C32.781 499.906 32 501.953 32 504C32 508.561 35.728 512.001 40 512.001C42.046 512.001 44.093 511.22 45.656 509.656L103.535 451.777C143.539 489.033 197.023 512 256 512S368.461 489.033 408.465 451.777L466.344 509.656C467.907 511.22 469.954 512.001 472 512.001C476.276 512.001 480 508.551 480 504C480 501.953 479.219 499.906 477.656 498.344L419.777 440.465C457.031 400.463 480 346.975 480 288C480 164.287 379.711 64 256 64ZM256 496C141.309 496 48 402.691 48 288S141.309 80 256 80S464 173.309 464 288S370.691 496 256 496ZM352 280H264V192C264 187.578 260.406 184 256 184S248 187.578 248 192V280H160C155.594 280 152 283.578 152 288S155.594 296 160 296H248V384C248 388.422 251.594 392 256 392S264 388.422 264 384V296H352C356.406 296 360 292.422 360 288S356.406 280 352 280Z " })
  }
));
AlarmPlusThin.displayName = "AlarmPlusThin";
var AlarmPlus_default = AlarmPlusThin;
